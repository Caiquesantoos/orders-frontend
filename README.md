# Nexo Commerce — painel de operações
Front-end em HTML, CSS e JavaScript sem dependências: busca, filtros combinados, indicadores calculados e exportação do recorte em CSV. Dados fictícios.

## Executar
Abra index.html no navegador ou execute `python -m http.server 8000` nesta pasta. Teste da lógica: `node test.js` (Node 18+).

## Decisões
Tabela semântica, labels explícitos, feedback anunciado, foco visível, layout adaptável e tabela com rolagem horizontal no celular. Valores monetários armazenados em centavos. CSV com escape de aspas e BOM para compatibilidade.

## Limites
Dados estáticos sem persistência, login ou API. Testes automatizados cobrem a lógica de filtros, não equivalem a uma auditoria de acessibilidade ou teste em todos os navegadores. Próximos passos: paginação e testes de interface.
