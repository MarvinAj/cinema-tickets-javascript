import { expect, assert } from 'chai';
import express from 'express';
import setupRoutes from '../../src/pairtest/routes/RouteSetup.js';

describe('RouteSetup Tests', () => {
  it('Should thrown TypeError if errorHandler is not of type function', () => {
    expect(() => { const appTest = setupRoutes(''); }).to.throw(TypeError, 'app.use is not a function');
  });
});
