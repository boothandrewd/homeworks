# W2D5/lru_cache.rb
# Author: Andrew Booth

class LRUCache
  def initialize(size)
    @size = 4

    @cache = [nil] * @size
  end

  def count
    # returns number of elements currently in cache
    @cache.count { |el| !el.nil? }
  end

  def add(el)
    # adds element to cache according to LRU principle
    if @cache.include?(el)
      @cache.delete(el)
    else
      @cache.shift
    end
    @cache.push(el)
  end

  def show
    # shows the items in the cache, with the LRU item first
    p @cache
  end

  private
  # helper methods go here!

end
