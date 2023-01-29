export function filterData(searchInput, resturants) {
  return resturants.filter((resturant) =>
    resturant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}
