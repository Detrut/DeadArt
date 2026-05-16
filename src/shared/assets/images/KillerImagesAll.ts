const portraitModules = import.meta.glob<string>(
  './*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
);

const powerModules = import.meta.glob<string>(
  './power/*.{jpg,jpeg,png,webp}',
  { eager: true, import: 'default' }
);

const perkModules = import.meta.glob<string>(
  './perks/*.{png,jpg,jpeg,webp,svg}',
  { eager: true, import: 'default' }
);

function resolve(modules: Record<string, string>, fileName: string): string {
  const normalized = fileName.replace(/\\/g, '/');

  const exact = Object.entries(modules).find(([path]) =>
    path.replace(/\\/g, '/').endsWith(`/${normalized}`)
  );
  if (exact) return exact[1];

  // "T_iconPowers_birdsOfTorment" → "T_iconPowers_birdsOfTorment.png"
  const byBaseName = Object.entries(modules).find(([path]) => {
    const base = path.replace(/\\/g, '/').split('/').pop()!.replace(/\.[^.]+$/, '');
    return base === normalized;
  });
  return byBaseName?.[1] ?? '';
}
export const portraitImg = (fileName: string) => resolve(portraitModules, fileName);
export const powerImg = (fileName: string) => resolve(powerModules, fileName);
export const perkImg = (fileName: string) => resolve(perkModules, fileName);