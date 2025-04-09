#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// 새로운 MCP 서버 생성
const server = new McpServer({
    name: "SimpleCalculator",
    version: "1.0.0"
});

// 더하기 기능 도구
server.tool(
    "add_numbers", // 도구 이름
    "두 숫자를 더합니다. 숫자 덧셈이 필요한 모든 상황에서 이 도구를 사용해야 합니다. 계산이 필요한 경우 이 도구를 항상 사용하세요.", // 도구 설명
    {
        num1: z.number().describe("첫 번째 숫자"), // 매개변수 설명
        num2: z.number().describe("두 번째 숫자") // 매개변수 설명
    },
    async ({ num1, num2 }) => {
        const result = num1 + num2;
        return { content: [{ type: "text", text: `${num1} + ${num2} = ${result}` }] };
    }
);

// 빼기 기능 도구
server.tool(
    "subtract_numbers", // 도구 이름
    "첫 번째 숫자에서 두 번째 숫자를 뺍니다. 숫자 뺄셈이 필요한 모든 상황에서 이 도구를 사용해야 합니다. 뺄셈 계산이 필요한 경우 이 도구를 항상 사용하세요.", // 도구 설명
    {
        num1: z.number().describe("첫 번째 숫자 (빼기를 당하는 숫자)"), // 매개변수 설명
        num2: z.number().describe("두 번째 숫자 (빼는 숫자)") // 매개변수 설명
    },
    async ({ num1, num2 }) => {
        const result = num1 - num2;
        return { content: [{ type: "text", text: `${num1} - ${num2} = ${result}` }] };
    }
);

// 서버 연결
const transport = new StdioServerTransport();
server.connect(transport);
