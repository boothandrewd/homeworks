# W1D5/map.rb

class Map
  def initialize
    @pairs = []
  end

  def assign(key, value)
    key_index = index_of(key)
    if key_index.nil?
      @pairs << [key, value]
    else
      @pairs[key_index][-1] = value
    end
  end

  def lookup(key)
    key_index = index_of(key)
    key_index.nil? ? nil : @pairs[key_index][-1]
  end

  def remove(key)
    key_index = index_of(key)
    @pairs.delete_at(key_index) unless key_index.nil?
  end

  def show
    @pairs
  end

  private

  def index_of(key)
    @pairs.each_with_index do |pair, index|
      return index if pair[0] == key
    end
    nil
  end
end
