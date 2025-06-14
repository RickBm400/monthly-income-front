interface options {
  colors: Array<string>;
  context: any;
}

/**
 * Creates a vertical linear gradient background for a chart using the provided colors and chart context.
 *
 * @param options - An object containing an array of color strings and the chart context.
 * @returns A CanvasGradient object representing the generated gradient background.
 */
export function setGradientBackground(options: options) {
  const chart = options.context.chart;
  if (!chart.chartArea) {
    return;
  }
  const colorsbg = [...options.colors];
  const {
    ctx,
    chartArea: { top, bottom },
  } = chart;

  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
  for (let fraction = 0; fraction < colorsbg.length; fraction++) {
    const currentFraction = fraction / (colorsbg.length - 1);

    gradientBg.addColorStop(currentFraction, colorsbg[fraction]);
  }
  return gradientBg;
}
