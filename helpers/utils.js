/**
 * Various utility functions
 */

// Formats price with spaces
export const formatPrice = (price) =>
 price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
