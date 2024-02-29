interface Person {
  name: string
  age: number
}

const ton:Person = {
  name: '1',
  age: 1,

}

// 定义函数类型
interface Sum{
  (x: number, y:number): number
}
type Sum1= (x: number, y:number) => number

interface Person1 extends Person {
  edu: string
}
// type没有继承, 使用 &
type Person2 = {
  edu: string
} & Person

const add: Sum1 = (x, y) => {
  return x + y
}

const ton1: Person2 = {
  name: '1',
  age: 1,
  edu: '本',
}

// Pick挑选
interface User {
  id: number
  name: string
  age: number
}

type  AgeType = Pick<User, 'name' | 'age'>

let wq: AgeType = {
  name: '1',
  age: 1
}

type AgeType1 = typeof wq

const wq1: AgeType1 = {
  name: '1',
  age: 1,
}

export default  ton
