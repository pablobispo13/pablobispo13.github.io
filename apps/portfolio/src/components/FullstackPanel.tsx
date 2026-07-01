import {
  Alert,
  Badge,
  Box,
  Code,
  Stack,
  Table,
  Text,
} from "@chakra-ui/react";
import type { EnvVarSpec, FullstackConfig } from "@/apps/types";

/** Lê uma variável VITE_* do ambiente de build (import.meta.env). */
function readEnv(key: string): string | undefined {
  return (import.meta.env as Record<string, string | undefined>)[key];
}

function EnvRow({ spec }: { spec: EnvVarSpec }) {
  const value = readEnv(spec.key) ?? spec.defaultValue;
  const configured = value !== undefined && value !== "";
  const shown = spec.secret && configured ? "••••••••" : value ?? "—";

  return (
    <Table.Row>
      <Table.Cell>
        <Code>{spec.key}</Code>
        {spec.required ? (
          <Badge ml={2} colorPalette="red" variant="subtle" size="sm">
            obrigatória
          </Badge>
        ) : null}
        <Text fontSize="xs" color="fg.muted">
          {spec.label}
        </Text>
      </Table.Cell>
      <Table.Cell>
        <Code fontSize="xs">{shown}</Code>
      </Table.Cell>
      <Table.Cell>
        <Badge colorPalette={configured ? "green" : "gray"} variant="subtle">
          {configured ? "definida" : "ausente"}
        </Badge>
      </Table.Cell>
    </Table.Row>
  );
}

export function FullstackPanel({ config }: { config: FullstackConfig }) {
  const apiBase = readEnv(config.apiBaseUrlEnv);
  const allVars: EnvVarSpec[] = [
    ...config.envVars,
    ...(config.database?.envVars ?? []),
  ];

  return (
    <Stack gap={5} p={6}>
      {apiBase ? (
        <Alert.Root status="success" variant="subtle">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Backend configurado</Alert.Title>
            <Alert.Description>
              Usando <Code>{apiBase}</Code> como base da API.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
      ) : (
        <Alert.Root status="warning" variant="subtle">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Backend não configurado</Alert.Title>
            <Alert.Description>
              Defina as variáveis abaixo em um arquivo <Code>.env</Code> (veja o{" "}
              <Code>.env.example</Code>) e rode o build novamente.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}

      {config.database ? (
        <Text fontSize="sm" color="fg.muted">
          Banco de dados: <Badge>{config.database.type}</Badge>
        </Text>
      ) : null}

      <Box overflowX="auto">
        <Table.Root size="sm" variant="outline">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Variável</Table.ColumnHeader>
              <Table.ColumnHeader>Valor</Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {allVars.map((spec) => (
              <EnvRow key={spec.key} spec={spec} />
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Stack>
  );
}
