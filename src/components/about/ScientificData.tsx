import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { ScientificData as ScientificDataType } from "@/types/product";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const chartVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export const ScientificData: React.FC<{ data: ScientificDataType }> = ({ data }) => {
  const baseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      geneLetters: true,
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
        ticks: {
          stepSize: 1,
          color: "#94a3b8",
          font: { size: 10 },
        },
        grid: { color: "rgba(255,255,255,0.06)" },
        title: {
          display: true,
          text: "Relative mRNA expression",
          color: "#e2e8f0",
          font: { size: 11 },
        },
      },
      x: {
        ticks: {
          color: "#e2e8f0",
          font: { size: 10, weight: "bold" as const, family: "monospace" },
        },
        grid: { display: false },
      },
    },
  };

  const geneLetterPlugin = {
    id: "geneLetters",
    afterDatasetsDraw(chart: any) {
      const { ctx } = chart;
      const dataset = chart.getDatasetMeta(0);

      ctx.save();
      ctx.font = "600 12px monospace";
      ctx.fillStyle = "#e5e7eb";
      ctx.textAlign = "center";
      ctx.textBaseline = "bottom";

      dataset.data.forEach((bar: any, index: number) => {
        const letter = ["a", "c", "a", "c", "a", "c"][index];
        ctx.fillText(letter, bar.x, bar.y - 6);
      });

      ctx.restore();
    },
  };


  const geneData = {
    labels: ["C", "T", "C", "T", "C", "T"],
    datasets: [
      {
        data: data.immune.data,
        backgroundColor: ["#64748b", "#0ea5e9", "#64748b", "#0ea5e9", "#64748b", "#0ea5e9"],
        borderColor: "#1e293b",
        borderWidth: 1,
        barThickness: 26,
      },
    ],
  };

  const proteaseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { left: 1, right: 14, top: 6, bottom: 35 },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.9)",
        titleColor: "#ffffff",
        bodyColor: "#e2e8f0",
        borderColor: "rgba(14, 165, 233, 0.4)",
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(255,255,255,0.04)",
          drawBorder: false,
        },
        ticks: {
          color: "#64748b",
          stepSize: 20,
          font: { size: 10 },
          padding: 1,
        },
        title: {
          display: true,
          text: "µ/mL",
          color: "#94a3b8",
          font: { size: 11, weight: "normal" as const },
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: "#e2e8f0",
          font: { size: 7, weight: "bold" as const, family: "monospace" },
          maxRotation: 0,
          minRotation: 0,
          padding: 1,
        },
      },
    },
  };

  return (
    <section className="min-h-screen p-6 md:p-16 grid-bg text-foreground font-sans selection:bg-accent/30 selection:text-white relative">
      <motion.div
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-px border border-clinical-border"
          variants={containerVariants}
        >
          {/* Growth Performance Panel */}
          <motion.div
            className="md:col-span-8 p-8 md:p-12 clinical-pane"
            variants={panelVariants}
          >
            <div className="absolute top-4 right-4 opacity-20">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border-2 border-accent rounded-full border-t-transparent"
              />
            </div>
            <span className="data-label">Subject: {data.growth.subject}</span>
            <motion.h2
              className="text-2xl md:text-3xl text-card-foreground font-light mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {data.growth.title}
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="flex-1 space-y-6">
                <motion.p
                  className="text-base md:text-lg leading-relaxed text-muted-foreground font-light"
                  variants={statVariants}
                >
                  {data.growth.description}
                </motion.p>

                <motion.div
                  className="grid grid-cols-2 gap-8 pt-6 border-t border-clinical-border"
                  variants={containerVariants}
                >
                  {data.growth.stats.map((stat, idx) => (
                    <motion.div key={idx} variants={statVariants} whileHover={{ scale: 1.05 }}>
                      <span className="font-mono text-[10px] text-muted-foreground block uppercase mb-1">
                        {stat.label}
                      </span>
                      <span className="text-xl md:text-2xl text-card-foreground font-light">
                        {stat.value} <span className={`text-xs ${stat.isUp ? 'text-accent' : 'text-accent'}`}>{stat.isUp ? '▲' : '▼'} {stat.change}</span>
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div className="flex-1" variants={chartVariants}>
                <div className="thin-border p-1 bg-background/40 relative group overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-accent/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <img
                    alt={data.growth.title}
                    className="w-full grayscale brightness-75 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                    src={data.growth.image}
                  />
                  <div className="absolute top-4 right-4 glow-point" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Immune Response Panel */}
          <motion.div
            className="md:col-span-4 p-8 md:p-12 clinical-panel"
            variants={panelVariants}
          >
            <span className="data-label">{data.immune.label}</span>
            <motion.h2
              className="text-2xl md:text-3xl text-card-foreground font-light mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {data.immune.title}
            </motion.h2>
            <motion.p
              className="text-sm leading-relaxed text-muted-foreground mb-6"
              variants={statVariants}
            >
              {data.immune.description}
            </motion.p>

            <motion.div
              className="thin-border p-4 md:p-6 bg-background/30 relative h-64 flex items-center justify-center"
              variants={chartVariants}
              whileHover={{ borderColor: "hsl(199, 89%, 48%)" }}
            >
              <div className="flex flex-col items-center w-full">
                <div className="flex justify-around w-full mb-3">
                  {data.immune.chartLabels.map((label, i) => (
                    <motion.span
                      key={label}
                      className="text-xs text-foreground/80"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>

                <div className="relative w-full h-40">
                  <Bar data={geneData} options={baseOptions} plugins={[geneLetterPlugin]} />

                </div>

                <motion.span
                  className="mt-2 text-xs text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Treatment
                </motion.span>
              </div>

              <div className="absolute inset-0 pointer-events-none border border-accent/20" />
              <div className="absolute bottom-4 left-4 glow-point" />
              <div className="absolute top-4 right-4 glow-point" />
            </motion.div>
          </motion.div>

          {/* Enzymatic Profile Panel */}
          <motion.div
            className="md:col-span-8 p-8 md:p-12 clinical-panel"
            variants={panelVariants}
          >
            <span className="data-label">{data.enzymes.label}</span>
            <motion.h2
              className="text-2xl md:text-3xl text-card-foreground font-light mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {data.enzymes.title}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {data.enzymes.list.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-4"
                  variants={chartVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="thin-border aspect-square p-4 flex items-center justify-center bg-background/20 relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <div className="w-full h-full p-3 bg-background/30 border border-clinical-border">
                      <motion.h3
                        className="text-center text-xs font-semibold text-foreground mb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        {item.name}
                      </motion.h3>
                      <div className="h-[calc(100%-2rem)]">
                        <Bar
                          data={{
                            labels: ["CONTROL", "TREATMENT"],
                            datasets: [{
                              data: item.data,
                              backgroundColor: ["rgba(100, 116, 139, 0.6)", "rgba(14, 165, 233, 0.85)"],
                              borderColor: ["rgba(100, 116, 139, 1)", "rgba(14, 165, 233, 1)"],
                              borderWidth: 1,
                              barThickness: 34,
                            }]
                          }}
                          options={proteaseOptions}
                        />
                      </div>
                    </div>
                    <motion.div
                      className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent"
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>
                  <span className="font-mono text-[10px] text-center block text-muted-foreground">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Uniformity Panel */}
          <motion.div
            className="md:col-span-4 p-8 md:p-12 clinical-panel"
            variants={panelVariants}
          >
            <span className="data-label">{data.uniformity.label}</span>
            <motion.h2
              className="text-2xl md:text-3xl text-card-foreground font-light mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {data.uniformity.title}
            </motion.h2>

            <motion.div
              className="thin-border h-48 mb-6 overflow-hidden relative group"
              variants={chartVariants}
            >
              <img
                alt={data.uniformity.title}
                className="w-full h-full object-cover grayscale opacity-50 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-70"
                src={data.uniformity.image}
              />
              <div className="absolute inset-0 border border-accent/10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
            </motion.div>

            <motion.p
              className="text-xs font-mono text-muted-foreground leading-relaxed uppercase tracking-wider"
              variants={statVariants}
            >
              {data.uniformity.description}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Corner indicators */}

      </motion.div>
    </section>
  );
};
