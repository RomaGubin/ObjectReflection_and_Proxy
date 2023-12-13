function orderByProps(obj, order) {
  const sortedKeys = [];
  const remainingKeys = [];

  for (const key in obj) {
    if (order.includes(key)) {
      sortedKeys.push(key);
    } else {
      remainingKeys.push(key);
    }
  }

  const sortedArray = order.map(key => ({ key, value: obj[key] }))
    .concat(remainingKeys.sort().map(key => ({ key, value: obj[key] })));

  return sortedArray;
}

export default orderByProps;