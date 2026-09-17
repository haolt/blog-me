export const formatDate = (date: string | undefined) => {
  if (!date) return "--";
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
};
