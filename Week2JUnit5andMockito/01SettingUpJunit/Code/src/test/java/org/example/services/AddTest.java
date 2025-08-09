package org.example.services;

import org.junit.Assert;
import org.junit.Test;

public class AddTest {
    @Test
    public void sumTest1(){
        int actualResult = Add.sum(10,20);
        int expectedResult = 30;
        Assert.assertEquals(expectedResult, actualResult);
    }
    @Test
    public void sumTest2(){
        int actualResult = Add.sum(15,22);
        int expectedResult = 37;
        Assert.assertEquals(expectedResult, actualResult);
    }
}
