export const validators = {
  required: (v: string) => v.trim().length > 0 || 'Wajib diisi',
  email: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Format email tidak valid',
  phoneID: (v: string) =>
    /^(\+62|62|0)8[1-9][0-9]{6,11}$/.test(v.replace(/[\s-]/g, '')) ||
    'Nomor HP Indonesia tidak valid',
  minLength: (n: number) => (v: string) => v.trim().length >= n || `Minimal ${n} karakter`,
}

export function validateField(value: string, rules: ((v: string) => true | string)[]) {
  for (const rule of rules) {
    const result = rule(value)
    if (result !== true) return result
  }
  return null
}
