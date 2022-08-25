const buildEnv = (process.env.BUILD_ENV || 'development').toLowerCase();

export const IS_DEVELOPMENT = buildEnv === 'development';
export const IS_PRODUCTION = buildEnv === 'production';
