package org.example.services;

import org.junit.Assert;
import org.junit.Test;

public class AssertionsTest {
    @Test
    public void testAssertions() {
        // Assert equals
        Assert.assertEquals(5, 2 + 3);

        // Assert true
        Assert.assertTrue(5 > 3);

        // Assert false
        Assert.assertFalse(5 < 3);

        // Assert null
        Assert.assertNull(null);

        // Assert not null
        Assert.assertNotNull(new Object());
    }
}
