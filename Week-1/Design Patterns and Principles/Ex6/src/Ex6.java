public class Ex6 {

    public static void main(String[] args) {

        // Proxy object
        Image image = new ProxyImage("nature.jpg");

        // Image loads from server only once
        image.display();

        System.out.println();

        // Second time, cached image is used
        image.display();
    }
}

// Subject Interface
interface Image {
    void display();
}

// Real Subject
class RealImage implements Image {

    private String fileName;

    public RealImage(String fileName) {
        this.fileName = fileName;
        loadFromServer();
    }

    private void loadFromServer() {
        System.out.println("Loading " + fileName + " from remote server...");
    }

    @Override
    public void display() {
        System.out.println("Displaying " + fileName);
    }
}

// Proxy Class
class ProxyImage implements Image {

    private RealImage realImage;
    private String fileName;

    public ProxyImage(String fileName) {
        this.fileName = fileName;
    }

    @Override
    public void display() {

        // Lazy Initialization
        if (realImage == null) {
            realImage = new RealImage(fileName);
        }

        // Cached object is reused
        realImage.display();
    }
}