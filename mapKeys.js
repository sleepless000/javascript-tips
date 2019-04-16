let streams = [
  {
    title: 'My Stream',
    description: 'This is a great stream.',
    id: 1
  },
  {
    title: 'Other Stream',
    description: "Here's some stream",
    id: 2
  },
  {
    title: 'Me Streaming Component Reuse!',
    description: 'This stream is about refactoring!!!',
    id: 4
  }
];

// for(let stream in streams){
//   val[streams[stream].title]= streams[stream]
// }
function mapKeys(obj, key) {
  let val = {};
  obj.forEach(item => (val[item[key]] = item));
  return val;
}

let val = mapKeys(streams, 'id');
val;
