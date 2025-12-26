# Flowchart Loop

## Flowchart for-loop

```mermaid
flowchart TD
A@{ shape: circle, label: "Mulai" }
B@{ shape: rectangle, label: "x = 1" }
C@{ shape: diamond, label: "x ≤ 10" }
D@{ shape: lean-r, label: "Output: x" }
E@{ shape: diamond, label: "x === 5" }
F@{ shape: rectangle, label: "x = 10" }
G@{ shape: rectangle, label: "x++" }
H@{ shape: dbl-circ, label: "Selesai" }

A --> B --> C
C -- True --> D --> E
E -- False --> G --> C
E -- True --> F --> G
C -- False --> H

```
