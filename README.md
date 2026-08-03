# Somerville City Council Item Flowchart

A visual guide to selected procedural state changes for items before the [Somerville, Massachusetts City Council](https://www.somervillema.gov/departments/city-council).

**[Open the full-size chart](https://raw.githubusercontent.com/r00k/somerville-city-council-flowchart/main/flowchart.svg)**

[![Somerville City Council item flowchart](./flowchart.svg)](https://raw.githubusercontent.com/r00k/somerville-city-council-flowchart/main/flowchart.svg)

## Credit and scope

The original flowchart was created by [Ben Wheeler](https://github.com/benjiwheeler) and is available in [his repository](https://github.com/benjiwheeler/somerville-city-council-flowchart). Thank you, Ben, for creating and sharing it.

This independent visual redesign is maintained by [r00k](https://github.com/r00k). It treats Ben's chart as authoritative for procedural content while reorganizing the presentation for easier scanning. It remains a simplified, City Council-centric orientation aid—not a comprehensive account of municipal decision-making.

## Reading the chart

- Numbered sections provide a reading order; lettered panels pull committee and other Council procedures away from the main path.
- Dashed arrows de-emphasize loops and cross-stage routes without changing their procedural effect.
- Pills beginning with `↩` or `→` refer to an existing state elsewhere in the chart; they are not additional states.
- Colors indicate sources (teal), key steps (blue), seldom-used steps (gold), and positive, intermediate, or negative developments (green, orange, and red).

## Source

The editable Mermaid source is [`flowchart.mmd`](./flowchart.mmd). Regenerate the SVG with:

```sh
npx -y @mermaid-js/mermaid-cli -i flowchart.mmd -o flowchart.svg -b transparent
```
