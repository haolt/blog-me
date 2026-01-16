export const formatDate = (date: string | undefined) => {
  if (!date) return "--";
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
};
