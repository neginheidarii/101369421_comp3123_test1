// Q2
// Negin Heidari, ID: 101369421

const resolvedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // json using {}
      resolve({"message: delayed success!"});
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({"error: delayed exception!"});
    }, 500);
  });
};

resolvedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

rejectedPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
