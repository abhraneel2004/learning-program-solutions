package org.example.services;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class AAAMethodTest {
    private AAAMethod a;

    @Before
    public void setup(){
        //Arrange
        a = new AAAMethod();
        System.out.println("Setup created");
    }

    @Test
    public void addTest(){
        //Act
        int actualResult = a.add(5,9);
        //Assert
        Assert.assertEquals(14,actualResult);
    }

    @Test
    public void subTest(){
        //Act
        int actualResult = a.sub(20,15);
        //Assert
        Assert.assertEquals(5,actualResult);
    }

    @After
    public void teardown(){
        a = null;
        System.out.println("Setup terminated");
    }
}
