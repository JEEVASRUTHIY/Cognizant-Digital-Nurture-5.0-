import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MockingAndStubbingTest {

    @Test
    public void testExternalApi() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Create service object
        MyService service = new MyService(mockApi);

        // Call method
        String result = service.fetchData();

        // Verify result
        assertEquals("Mock Data", result);
    }
}