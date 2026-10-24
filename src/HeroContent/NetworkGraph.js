import { Box, useTheme } from '@mui/material';

const nodes = [
  [40, 40], [180, 40], [320, 40], [460, 40],
  [180, 145], [320, 145], [460, 145],
  [40, 250], [180, 250], [320, 250], [460, 250],
  [180, 355], [320, 355], [460, 355],
  [40, 460], [180, 460], [320, 460], [460, 460],
];

const edges = [
  [0, 1], [0, 4], [0, 5], [0, 8], [0, 11], [0, 14],
  [1, 2], [1, 4], [1, 5], [1, 8], [1, 9], [1, 15],
  [2, 3], [2, 4], [2, 5], [2, 6], [2, 8], [2, 12], [2, 16],
  [3, 5], [3, 6], [3, 9], [3, 10], [3, 13], [3, 17],
  [4, 5], [4, 7], [4, 8], [4, 9], [4, 12],
  [5, 6], [5, 8], [5, 9], [5, 10], [5, 12], [5, 16],
  [6, 9], [6, 10], [6, 12], [6, 13], [6, 17],
  [7, 8], [7, 11], [7, 14],
  [8, 9], [8, 11], [8, 12], [8, 15],
  [9, 10], [9, 11], [9, 12], [9, 13], [9, 16],
  [10, 13], [10, 17],
  [11, 12], [11, 14], [11, 15], [11, 16],
  [12, 13], [12, 15], [12, 16], [12, 17],
  [13, 16], [13, 17],
  [14, 15], [15, 16], [16, 17],
];

const highlightedPath = [7, 5, 12, 10];

export default function NetworkGraph() {
  const theme = useTheme();
  const accent = theme.palette.primary.main;
  const lineColor = theme.palette.text.secondary;

  return (
    <Box
      role="img"
      aria-label="Network of interconnected nodes"
      sx={{
        width: '100%',
        pointerEvents: 'none',

        '& .network-edge': {
          opacity: 0,
          animation: 'edge-appear 1.2s ease forwards',
        },

        '& .network-node': {
          opacity: 0,
          animation: 'node-appear 0.6s ease forwards',
        },

        '& .network-highlight': {
          strokeDasharray: 1,
          strokeDashoffset: 1,
          animation: 'highlight-draw 0.65s ease forwards',
        },

        '@keyframes edge-appear': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        '@keyframes node-appear': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },

        '@keyframes highlight-draw': {
          to: { strokeDashoffset: 0 },
        },

        '@media (prefers-reduced-motion: reduce)': {
          '& .network-edge, & .network-node, & .network-highlight': {
            animation: 'none',
            opacity: 1,
            strokeDashoffset: 0,
          },
        },
      }}
    >
      <svg viewBox="0 0 500 500" width="100%" height="auto">
        <defs>
          <linearGradient id="network-fade">
            <stop offset="0%" stopColor={lineColor} stopOpacity="0.02" />
            <stop offset="45%" stopColor={lineColor} stopOpacity="0.15" />
            <stop offset="100%" stopColor={lineColor} stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Connecting lines */}
        <g stroke="url(#network-fade)" strokeWidth="1">
          {edges.map(([from, to], index) => {
            const start = nodes[from];
            const end = nodes[to];
            const progress = Math.max(start[0], end[0]) / 460;

            return (
              <line
                key={`${from}-${to}`}
                className="network-edge"
                x1={start[0]}
                y1={start[1]}
                x2={end[0]}
                y2={end[1]}
                style={{
                  animationDelay: `${progress * 2 + index * 0.015}s`,
                }}
              />
            );
          })}
        </g>

        {/* Highlighted connections draw fully from node to node */}
        <g
          fill="none"
          stroke={accent}
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          {highlightedPath.slice(0, -1).map((nodeIndex, index) => {
            const start = nodes[nodeIndex];
            const end = nodes[highlightedPath[index + 1]];

            return (
              <line
                key={`${nodeIndex}-${highlightedPath[index + 1]}`}
                className="network-highlight"
                x1={start[0]}
                y1={start[1]}
                x2={end[0]}
                y2={end[1]}
                pathLength="1"
                style={{
                  strokeDasharray: 1,
                  strokeDashoffset: 1,
                  animationDelay: `${index * 0.65}s`,
                }}
              />
            );
          })}
        </g>

        {/* Nodes appear as the network builds */}
        {nodes.map(([x, y], index) => {
          const highlighted = highlightedPath.includes(index);
          const progress = x / 460;

          return (
            <g
              key={index}
              className="network-node"
              style={{ animationDelay: `${progress * 2 + 0.2}s` }}
            >
              {highlighted && (
                <circle
                  cx={x}
                  cy={y}
                  r="13"
                  fill={accent}
                  opacity="0.15"
                />
              )}

              <circle
                cx={x}
                cy={y}
                r={highlighted ? 5.5 : 4}
                fill={highlighted ? accent : theme.palette.background.paper}
                stroke={highlighted ? accent : lineColor}
                strokeWidth="1.5"
              />
            </g>
          );
        })}
      </svg>
    </Box>
  );
}