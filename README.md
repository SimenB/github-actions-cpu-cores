# github-actions-cpu-cores


Uses [`os.cpus`](https://nodejs.org/api/os.html#os_os_cpus) to figure out how many logical cores are available on the runner.

```yaml
name: Node CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - "**"

jobs:
  test:
    strategy:
      matrix:
        os: [ubuntu-latest, macOS-latest, windows-latest]
    runs-on: ${{ matrix.os }}

    steps:
      - name: Get number of CPU cores
        uses: SimenB/github-actions-cpu-cores@v1
      - name: run tests
        run: npx jest --max-workers ${{ steps.cpu-cores.outputs.count }}
```
