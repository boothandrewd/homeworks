# W2D4/big_octopus.rb

def sluggish_octopus(fish)
  biggest_fish = fish.first
  fish.each do |o_fish|
    fish.each do |i_fish|
      biggest_fish = o_fish if o_fish.length > i_fish.length
    end
  end
  biggest_fish
end

def dominant_octopus(fish)
  merge_sort(fish) { |l, r| l.size <=> r.size }.last
end

def merge_sort(array, &prc)
  return array if array.size <= 1

  prc ||= proc { |l, r| l <=> r }

  middle_idx = array.size / 2
  left = merge_sort(array[0...middle_idx], &prc)
  right = merge_sort(array[middle_idx..-1], &prc)

  merge(left, right, &prc)
end

def merge(left, right, &prc)
  arr = []
  until left.empty? || right.empty?
    arr << if prc.call(left.first, right.first)
      left.shift
    else
      right.shift
    end
  end

  arr + left + right
end

def clever_octopus(fish)
  biggest_fish = fish.first
  fish.each { |f| biggest_fish = f if f.length > biggest_fish.length }
  biggest_fish
end

array_of_fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

p sluggish_octopus(array_of_fish)
p dominant_octopus(array_of_fish)
p clever_octopus(array_of_fish)
