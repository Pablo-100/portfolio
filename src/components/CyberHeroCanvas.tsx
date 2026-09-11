import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  type: 'soc' | 'server' | 'router' | 'firewall';
  pulse: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export const CyberHeroCanvas: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
    };

    window.addEventListener('resize', handleResize);

    const nodeLabels = [
      { name: 'SOC Core', type: 'soc' as const },
      { name: 'SIEM / ELK', type: 'soc' as const },
      { name: 'Cisco Gateway', type: 'router' as const },
      { name: 'Linux Srv', type: 'server' as const },
      { name: 'Firewall', type: 'firewall' as const },
      { name: 'ARGUS VOC', type: 'soc' as const },
      { name: 'IDS / IPS', type: 'firewall' as const },
      { name: 'Threat DB', type: 'server' as const },
      { name: 'Oktopus Agent', type: 'server' as const },
      { name: 'FullStack API', type: 'server' as const }
    ];

    const nodes: Node[] = nodeLabels.map((lbl) => ({
      x: Math.random() * (width - 100) + 50,
      y: Math.random() * (height - 100) + 50,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: lbl.type === 'soc' ? 5 : 3.5,
      label: lbl.name,
      type: lbl.type,
      pulse: Math.random() * Math.PI * 2
    }));

    const packets: Packet[] = [];
    for (let i = 0; i < 8; i++) {
      const fromNode = Math.floor(Math.random() * nodes.length);
      let toNode = Math.floor(Math.random() * nodes.length);
      while (toNode === fromNode) toNode = Math.floor(Math.random() * nodes.length);
      packets.push({
        fromNode,
        toNode,
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.008
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw Nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        // Mouse gravity influence
        if (interactive && mouseX > 0) {
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            node.x += (dx / dist) * 0.4;
            node.y += (dy / dist) * 0.4;
          }
        }

        // Draw node connections
        nodes.forEach((otherNode, j) => {
          if (i >= j) return;
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.25;
            ctx.strokeStyle = node.type === 'soc' || otherNode.type === 'soc'
              ? `rgba(56, 189, 248, ${alpha})`
              : `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });

        // Draw node body
        const pulseRadius = node.radius + Math.sin(node.pulse) * 1.5;
        const color = node.type === 'soc' ? '#38bdf8' : node.type === 'firewall' ? '#f43f5e' : '#c084fc';

        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw Label
        ctx.fillStyle = 'rgba(226, 232, 240, 0.6)';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(node.label, node.x + 8, node.y + 3);
      });

      // Update & Draw Packets along lines
      packets.forEach((packet) => {
        packet.progress += packet.speed;
        if (packet.progress >= 1) {
          packet.progress = 0;
          packet.fromNode = packet.toNode;
          let next = Math.floor(Math.random() * nodes.length);
          while (next === packet.fromNode) next = Math.floor(Math.random() * nodes.length);
          packet.toNode = next;
        }

        const p1 = nodes[packet.fromNode];
        const p2 = nodes[packet.toNode];
        const px = p1.x + (p2.x - p1.x) * packet.progress;
        const py = p1.y + (p2.y - p1.y) * packet.progress;

        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive && canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-auto rounded-3xl opacity-70">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
