import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAATest {

    private int num1;
    private int num2;
    private int result;

    @Before
    public void setUp() {
        num1 = 2;
        num2 = 3;
    }

    @Test
    public void testAddition() {

        // Arrange
        // num1 and num2 are initialized in setUp()

        // Act
        result = num1 + num2;

        // Assert
        assertEquals(5, result);
    }

    @After
    public void tearDown() {
        num1 = 0;
        num2 = 0;
        result = 0;
    }
}