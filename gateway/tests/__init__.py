"""manage test imports."""
import unittest

def suite():   
    return unittest.TestLoader().discover("gateway.tests", pattern="*.py")
