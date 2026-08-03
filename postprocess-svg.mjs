import { readFileSync, writeFileSync } from "node:fs";

const path = process.argv[2];

if (!path) {
  throw new Error("Usage: node postprocess-svg.mjs <svg-path>");
}

let svg = readFileSync(path, "utf8");
const clusterLabelPattern = /<g class="cluster-label"[\s\S]*?<\/foreignObject><\/g>/g;
const clusterLabels = svg.match(clusterLabelPattern) ?? [];

if (clusterLabels.length === 0) {
  throw new Error("No cluster labels found in generated SVG");
}

svg = svg.replace(clusterLabelPattern, "");

const rootEndMarker = '</g><text text-anchor="middle"';
const rootEnd = svg.lastIndexOf(rootEndMarker);

if (rootEnd === -1) {
  throw new Error("Could not find generated SVG root boundary");
}

svg = `${svg.slice(0, rootEnd)}${clusterLabels.join("")}${svg.slice(rootEnd)}`;
writeFileSync(path, svg);
