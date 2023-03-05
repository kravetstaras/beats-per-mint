export default function capitalizeFirstLetter(str: string) {
  return str[0].toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
}
