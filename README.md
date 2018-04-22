# Totvs Range

`import { ThfRangeModule } from '@totvs/thf-ui/components/thf-range';`
Módulo do componente Thf Range

# Componente

O `thf-range` é um componente específico para selecionar um intervalo de números. 
Pode ser utilizado em aplicações com filtro por exemplo.

# Seletor

```sh
<thf-range
    name="string"
    t-help="string"
    t-label="string"
    t-minValue="number"
    t-maxValue="number"
    t-interval="number"
    t-decimalPlaces="number"
    t-initialValue="number"
    t-finalValue="number"
    t-required="boolean"
    t-disabled="boolean"
    t-indicators="boolean"
    t-money="boolean"
    t-moneySymbol="string">
    (t-change)="EventEmitter"
</thf-range>
```
### Propriedades

| Nome | Tipo | Padrão | Descrição |
| ------ | ------ | ------ | ------ |
| name | string | - | Nome do componente. 
| t-decimalPlaces | number | 0 | **_(opcional)_** Casas decimais.
| t-disabled | boolean | false | **_(opcional)_** Indica que o campo estará desabilitado.
| t-finalValue | number | 0 | **_(opcional)_** Valor final selecionado.
| t-help | string | - | **_(opcional)_**  Texto de apoio para o campo.
| t-label | string | - | **_(opcional)_**  Label exibido pelo componente.
| t-maxValue | number | 0 | Valor máximo.
| t-minValue | number | 0 | Valor mínimo.
| t-indicators | boolean | false | **_(opcional)_** Indica se mostrará os valores selecionados no intervalo.
| t-initialValue | number | 0 | **_(opcional)_**  Valor inicial selecionado.
| t-interval | number | 0 | Intervalo um número e outro.
| t-required | boolean | false | **_(opcional)_** Indica que o campo será obrigatório.
| t-money | string | false | **_(opcional)_** Indica se será moeda.
| t-moneySymbol | string | R$ | **_(opcional)_** Símbolo da moeda.
| (t-change) | EventEmitter | - | **_(opcional)_** Evento disparado ao trocar o valor do range. Emite um array onde a posição [0] é igual ao menor número selecionado e a posição [1] é igual ao maior número selecionado.


