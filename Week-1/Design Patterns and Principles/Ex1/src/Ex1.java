public class Ex1 {

    public static void main(String[] args) {

        // Get Logger object for the first time
        Logger logger1 = Logger.getInstance();
        logger1.log("Application Started");

        // Get Logger object again
        Logger logger2 = Logger.getInstance();
        logger2.log("Logging another message");

        // Check whether both objects are the same
        if (logger1 == logger2) {
            System.out.println("Only one Logger object is created.");
        } else {
            System.out.println("Multiple Logger objects are created.");
        }
    }
}

// Singleton Class
class Logger {

    // Static variable to store the single object
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger object created.");
    }

    // Static method to return the single object
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}