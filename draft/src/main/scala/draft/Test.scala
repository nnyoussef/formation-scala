package draft

object Test {

  def main(args: Array[String]): Unit = {

    var a = for {
      i <- 1 to(100, 1)
      if i > 4
      j <- 1 to 2
      k = i * 100
    } yield (k, j)

    for {i <- 1 to 100} yield i
    var s: Seq[Number] = Seq(1, 2, 3, 9, 8, 6, 55, 22, 999)
    println(s)

    var z: Map[String, Int] = Map[String, Int]("x" -> 1243)



      println(s.groupBy((f: Number) => {
        if f.intValue() > 50 then "1" else "0"
      }))

  }
}

