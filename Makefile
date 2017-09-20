#!/bin/bash
MOCHA=node_modules/mocha/bin/mocha
TESTS=test/*

test:
	$(MOCHA) -R nyan $(TESTS)
.PHONY: test