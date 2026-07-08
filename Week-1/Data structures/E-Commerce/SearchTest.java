public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
            new Product(103, "Mouse", "Electronics"),
            new Product(101, "Laptop", "Electronics"),
            new Product(104, "Keyboard", "Electronics"),
            new Product(102, "Shoes", "Fashion"),
            new Product(105, "Watch", "Accessories")
        };

        System.out.println("Linear Search:");

        Product p1 = SearchAlgorithms.linearSearch(products, 102);

        if (p1 != null)
            p1.display();
        else
            System.out.println("Product not found");

        System.out.println();

        System.out.println("Binary Search:");

        Product p2 = SearchAlgorithms.binarySearch(products, 104);

        if (p2 != null)
            p2.display();
        else
            System.out.println("Product not found");
    }
}