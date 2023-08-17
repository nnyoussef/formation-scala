package recfun

object RecFun extends RecFunInterface:

  def main(args: Array[String]): Unit =
    println("Pascal's Triangle")
    for row <- 0 to 10 do
      for col <- 0 to row do
        print(s"${pascal(col, row)} ")
      println()

  private def checkIfEdge(c1: Int, r1: Int): Boolean =
    c1 == 0 || c1 == r1

  private def findValueAtPosition(result: Int, c1: Int, r1: Int): Int =
    if checkIfEdge(c1, r1) then 1
    else result + findValueAtPosition(result, c1 - 1, r1 - 1) + findValueAtPosition(result, c1, r1 - 1)

  /**
   * Exercise 1
   */
  def pascal(c: Int, r: Int): Int =
    findValueAtPosition(0, c, r)


  /**
   * Exercise 2
   */

  private def findLastClosing(from: Int, chars: List[Char]): Int =
    var res = -1

    for i <- from until chars.size - 1 do
      if chars(i) == '(' && chars(i + 1) == ')' then
        return i
    -1

  private def clean(sanitizedChars: List[Char]): List[Char] =
    var res: List[Char] = sanitizedChars

    val nearestClosing = findLastClosing(0, res)
    if nearestClosing > -1 then

      val temp: List[Char] = res.slice(0, nearestClosing).appendedAll(res.slice(nearestClosing + 2, res.size))
      println(temp)
      res = temp
      res = clean(res)

    res


  def balance(chars: List[Char]): Boolean =
    val sanitizedChars = chars.filter(c => c == '(' || c == ')')

    val x = clean(sanitizedChars)
    x.isEmpty


  /**
   * Exercise 3
   */


  def countChange(money: Int, coins: List[Int]): Int = {
    if (money == 0) 1
    else if (money < 0 || coins.isEmpty) 0
    else countChange(money - coins.head, coins) + countChange(money, coins.tail)
  }

