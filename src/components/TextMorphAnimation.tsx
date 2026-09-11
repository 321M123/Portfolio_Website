'use client';

import React, { useRef, useEffect } from 'react';

const TextMorphAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let animationFrameId: number;

    const parent = canvas.parentElement;
    if (!parent) return;

    let particlesArray: Particle[] = [];

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      speed: number;
      color: string;

      constructor(x: number, y: number, canvasWidth: number, canvasHeight: number, color: string) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 1.5 + 1; // particle size
        this.baseX = x;
        this.baseY = y;
        this.speed = Math.random() * 20 + 5; // animation speed
        this.color = color;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }

      update() {
        const dx = this.baseX - this.x;
        const dy = this.baseY - this.y;

        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 0.1) {
          this.x = this.baseX;
          this.y = this.baseY;
        } else {
          this.x += dx / this.speed;
          this.y += dy / this.speed;
        }
      }
    }

    function init(currentCtx: CanvasRenderingContext2D) {
      particlesArray = [];
      const currentCanvas = currentCtx.canvas;
      const dpr = window.devicePixelRatio || 1;
      const text = 'Mikael K.';

      const canvasWidth = currentCanvas.width / dpr;
      const canvasHeight = currentCanvas.height / dpr;

      const fontSize = Math.min(canvasWidth / 8, 100);
      currentCtx.font = `700 ${fontSize}px Inter, ui-sans-serif, system-ui, sans-serif`;
      currentCtx.textAlign = 'center';
      currentCtx.textBaseline = 'middle';

      const textMetrics = currentCtx.measureText(text);
      const textWidth = textMetrics.width;
      const textX = canvasWidth / 2;

      const gradient = currentCtx.createLinearGradient(textX - textWidth / 2, 0, textX + textWidth / 2, 0);

      gradient.addColorStop(0, '#111111');
      gradient.addColorStop(1, '#3A5A7A');

      currentCtx.fillStyle = gradient;
      currentCtx.fillText(text, textX, canvasHeight / 2);

      const textCoordinates = currentCtx.getImageData(0, 0, currentCanvas.width, currentCanvas.height);
      currentCtx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

      const gap = 4;

      for (let y = 0; y < textCoordinates.height; y += gap) {
        for (let x = 0; x < textCoordinates.width; x += gap) {
          const alphaIndex = (y * textCoordinates.width + x) * 4 + 3;
          if (textCoordinates.data[alphaIndex] > 128) {
            const red = textCoordinates.data[alphaIndex - 3];
            const green = textCoordinates.data[alphaIndex - 2];
            const blue = textCoordinates.data[alphaIndex - 1];
            const color = `rgb(${red},${green},${blue})`;
            particlesArray.push(new Particle(x / dpr, y / dpr, canvasWidth, canvasHeight, color));
          }
        }
      }
    }

    function animate(currentCtx: CanvasRenderingContext2D) {
      const currentCanvas = currentCtx.canvas;
      currentCtx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw(currentCtx);
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(() => animate(currentCtx));
    }

    const setup = () => {
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.scale(dpr, dpr);

      init(ctx);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animate(ctx);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          setup();
        }
      }
    });

    if (parent) {
      resizeObserver.observe(parent);
    }

    setup();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (parent) {
        resizeObserver.unobserve(parent);
      }
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default TextMorphAnimation;
