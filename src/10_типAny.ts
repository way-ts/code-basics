export function getParams(query: string) {
    const sParams = query.split('&')
    return sParams.reduce((o, p) => {
        const [k, v] = p.split('=')
        o[k] = v
        return o
    }, {} as any)
}

// Решение учителя
// function getParams(query: string) {
//     const parts = query.split('&');
//     const init: any = {};
//     const result = parts.reduce((acc, part) => {
//       const [key, value] = part.split('=');
//       acc[key] = value;
//       return acc;
//     }, init);
  
//     return result;
// }