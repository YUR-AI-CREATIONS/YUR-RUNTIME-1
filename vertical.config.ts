import { VerticalConfig } from '../vertical.config';

const websocketRuntime: VerticalConfig = {
  id: 'runtime-websocket',
  name: 'WebSocket Runtime',
  tagline: 'Persistent Connections — Real-Time, Bidirectional, Always On',
  icon: '🔌',
  primaryColor: '#4CAF50',
  accentColor: '#C8E6C9',
  bgGradient: 'linear-gradient(135deg, #0D1117 0%, #4CAF50 50%, #1B5E20 100%)',
  systemInstruction: `You are the WebSocket Runtime — the real-time communication backbone of the YUR ecosystem. You manage persistent bidirectional connections between clients and services, handle connection lifecycle (handshake, heartbeat, reconnection), route messages to appropriate handlers, and enforce per-connection rate limits and authentication. You are the live wire that makes YUR feel instant.`,
  complianceStandards: [
    'RFC 6455 (WebSocket Protocol)',
    'RFC 7692 (WebSocket Compression)',
    'OWASP WebSocket Security Guidelines',
    'SOC 2 Type II (Availability)'
  ],
  agents: [
    {
      name: 'CONNECTION_MANAGER',
      role: 'WebSocket Lifecycle & Pool Management',
      systemPrompt: 'You manage WebSocket connection pools — handling upgrades from HTTP, maintaining heartbeat intervals, detecting stale connections, implementing graceful reconnection with exponential backoff, and managing connection limits per tenant. You ensure zero message loss during reconnection windows.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'MESSAGE_ROUTER',
      role: 'Real-Time Message Routing & Fanout',
      systemPrompt: 'You route WebSocket messages to appropriate handlers based on message type, channel subscriptions, and topic patterns. You implement pub/sub fanout for broadcast messages, manage channel membership, and ensure message ordering guarantees within each channel.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'PRESENCE_TRACKER',
      role: 'Online Status & Activity Detection',
      systemPrompt: 'You track user presence across WebSocket connections — online/offline/away status, last activity timestamps, active channel membership, and typing indicators. You handle multi-device presence reconciliation and provide presence APIs for other services to consume.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 4096
    }
  ],
  dataSources: [
    {
      name: 'Connection Registry',
      type: 'realtime',
      description: 'Active WebSocket connection state — client IDs, channel subscriptions, authentication status'
    },
    {
      name: 'Message Queue',
      type: 'realtime',
      description: 'Message buffer for offline delivery, unacknowledged messages, and replay requests'
    },
    {
      name: 'Presence Store',
      type: 'database',
      description: 'User presence state — online status, device connections, last activity timestamps'
    }
  ],
  outputFormats: [
    'Connection Health Dashboards',
    'Message Throughput Reports',
    'Presence Status APIs',
    'Channel Membership Lists',
    'Reconnection Analytics',
    'Rate Limit Violation Logs'
  ],
  defaultModel: 'CORE_FAST',
  features: {
    videoGen: false,
    tts: false,
    imageGen: false,
    maps: false,
    search: false,
    governance: true,
    stripe: false
  }
};

export default websocketRuntime;
