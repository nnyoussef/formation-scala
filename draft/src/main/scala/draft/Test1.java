package draft;

public class Test1 {
    public Test1(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public Test1(int x) {
        this.x = x;
    }


    private int x;
    private int y;

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void setY(int y) {
        this.y = y;
    }
}
