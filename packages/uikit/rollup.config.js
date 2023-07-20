import Ts from 'rollup-plugin-typescript2';

export default {
    input: [
        'src/index.ts',
        'src/Button/Button.tsx'
        // other component from src TODO: later make function,
    ],
    output: {
        dir: 'lib',
        format: 'esm',
        sourcemap: true
    },
    plugins: [Ts()],
    preserveModules: true,
    external: ['react']
}