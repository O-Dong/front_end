export type ToolStatus = 'Stable' | 'Beta' | 'Alpha';

export interface Tool {
  id: number;
  name: string;
  description: string;
  status: ToolStatus;
  category: 'Network' | 'Web' | 'Malware'
  details: string;
}

export const tools: Tool[] = [
  {
    id: 1,
    name: "NetScanner",
    description: "실시간 네트워크 패킷을 분석하고...",
    status: 'Stable',
    category: 'Network',
    details: 'NetScanner는 TCP/IP 스택을 깊이 분석하여...'
  },
  {
    id: 2,
    name: "NetScanner",
    description: "실시간 네트워크 패킷을 분석하고...",
    status: 'Stable',
    category: 'Network',
    details: 'NetScanner는 TCP/IP 스택을 깊이 분석하여...'
  },
  {
    id: 3,
    name: "NetScanner",
    description: "실시간 네트워크 패킷을 분석하고...",
    status: 'Stable',
    category: 'Network',
    details: 'NetScanner는 TCP/IP 스택을 깊이 분석하여...'
  },
]