public class TestSingleton {

    public static void main(String[] args) {

        // Get the first instance
        Logger logger1 = Logger.getInstance();
        logger1.log("Application started.");

        // Get the second instance
        Logger logger2 = Logger.getInstance();
        logger2.log("User logged in.");

        // Check whether both references point to the same object
        if (logger1 == logger2) {
            System.out.println("\nOnly one Logger instance exists.");
        } else {
            System.out.println("\nMultiple Logger instances exist.");
        }
    }
}