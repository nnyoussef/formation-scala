package recfun

class Test(x: Int, y: Int, z: Int) {

def a(): Int =
this.x

def b(): Int =
this.a() * this.x

require(x < 100, "Illegal value") # here we are checking if the value of one of our global attribute verify the case, it's like evaluating the constructor to see if we can create the object


require(y < 1000)
}


def this(ab: Int) =  -> it is another way of defining constructors
this(ab, 1, 1)   


extension (r: Test)
def min(): Int =
r.a()

is a simple piece of code that will create other pieces or definition of the original class, it's like dynamically re-creating the original class
example: 

extension (r: Test)
def minExt(): Int =
r.a()

Test().minExt()


adding infix near the methode class : class ABC {
    infix def min(x:ABC): ....
} ->  will allow us to execute min like this: <code>new ABC() min new ABC()</code>
