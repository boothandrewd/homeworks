# W2D4/dancing_octopus.rb

def slow_dance(dir, tiles_array)
  tiles_array.each_with_index do |tile, idx|
    return idx if tile == dir
  end
  -1
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up"]

p slow_dance('up', tiles_array)
p slow_dance('right-down', tiles_array)

def fast_dance(dir, tiles_hash)
  tiles_hash[dir]
end

tiles_hash = tiles_array.each_with_index
                        .each_with_object({}) do |(dir, idx), hash|
  hash[dir] = idx
end

p fast_dance('up', tiles_hash)
p fast_dance('right-down', tiles_hash)
