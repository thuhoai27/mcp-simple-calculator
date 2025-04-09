# SimpleCalculator

SimpleCalculator는 기본적인 수학 연산을 제공하는 Model Context Protocol(MCP) 서버입니다. AI 어시스턴트가 자체 수학 능력에 의존하지 않고 정확한 계산을 수행할 수 있게 해줍니다.

## 기능

- **숫자 더하기**: 두 숫자를 더함
- **숫자 빼기**: 첫 번째 숫자에서 두 번째 숫자를 뺌

## 설치

MCP 구성 파일에 다음과 같이 추가하세요:

```json
{
    "mcpServers": {
        "simple-calculator": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-simple-calculator"
            ]
        }
    }
}
```

## 사용법

SimpleCalculator MCP 서버는 기본 산술 연산을 수행하기 위한 두 가지 간단한 도구를 제공합니다:

### 더하기 (add_numbers)

두 개의 숫자 매개변수를 받아 합계를 반환합니다.

**매개변수:**
- `num1`: 첫 번째 숫자
- `num2`: 두 번째 숫자

**반환값:**
- 두 숫자의 합계 (예: "5 + 3 = 8")

### 빼기 (subtract_numbers)

두 개의 숫자 매개변수를 받아 첫 번째 숫자에서 두 번째 숫자를 뺀 결과를 반환합니다.

**매개변수:**
- `num1`: 첫 번째 숫자 (빼기를 당하는 숫자)
- `num2`: 두 번째 숫자 (빼는 숫자)

**반환값:**
- 뺄셈 결과 (예: "10 - 4 = 6")



## 라이센스

MIT
