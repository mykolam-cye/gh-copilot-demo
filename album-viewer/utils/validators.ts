// validate date from text input in french format and convert it to a date object
export function validateDate(dateString: string): Date | null { 
  const dateParts = dateString.split('/');
  if (dateParts.length !== 3) {
    return null; // Invalid format
  }

  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1; // Months are zero-based in JavaScript
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month, day);
  
  // Check if the date is valid
  if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
    return date;
  }
  
  return null; // Invalid date
}
// function that validates the format of a GUID string
export function validateGuid(guid: string): boolean {
  const guidRegex = /^[{(]?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}[)}]?$/i;
  return guidRegex.test(guid);
}
// function that validates the format of a IPV6 address string
export function validateIPV6(ipv6: string): boolean {
  const ipv6Regex = /^(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}|(?:[0-9a-f]{1,4}:){1,7}:|(?:[0-9a-f]{1,4}:){1,6}:[0-9a-f]{1,4}|(?:[0-9a-f]{1,4}:){1,5}(?::[0-9a-f]{1,4}){1,2}|(?:[0-9a-f]{1,4}:){1,4}(?::[0-9a-f]{1,4}){1,3}|(?:[0-9a-f]{1,4}:){1,3}(?::[0-9a-f]{1,4}){1,4}|(?:[0-9a-f]{1,4}:){1,2}(?::[0-9a-f]{1,4}){1,5}|[0-9a-f]{1,4}:(?::[0-9a-f]{1,4}){1,6}|:(?::[0-9a-f]{1,4}){1,7}|(?:(?:[0-9a-f]{1,4}:){6}|(?:[0-9a-f]{1,4}:){5}:[0-9a-f]{1,4})(?::[0-9a-f]{1,4}){0,5}$/i;
  return ipv6Regex.test(ipv6);
} 