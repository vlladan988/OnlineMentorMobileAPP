export const isClient = user => user.user_type === 'guest' || user.user_type === 'client';
