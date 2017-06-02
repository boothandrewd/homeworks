# recursion.rb

# 1. `sum_to`
def sum_to(n)
  return nil if n < 1
  return 1 if n == 1
  n + sum_to(n - 1)
end

# 2. `add_numbers`
def add_numbers(nums_array)
  return nums_array.first if nums_array.length <= 1
  nums_array.first + add_numbers(nums_array[1..-1])
end

# 3. Gamma Function
def Γ(n)
  return nil if n.zero?
  factorial(n - 1)
end

def factorial(n)
  return 1 if n <= 1
  n * factorial(n - 1)
end

# 4. Ice Cream Shop
def ice_cream_shop(flavors, favorite)
  return false if flavors.empty?
  flavors.first == favorite || ice_cream_shop(flavors[1..-1], favorite)
end

# 5. Reverse
def reverse(string)
  return string if string.length <= 1
  string[-1] + reverse(string[0..-2])
end
